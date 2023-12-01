import { DateInfo, EventType, allHours, events } from './data';


export const initialDates = (currentWeek: number) => {
    const initialDates: DateInfo[] = [];
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + (currentWeek * 7));
    Array.from(Array(7).keys()).map((idx) => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + idx);

        initialDates.push({
            day: date.toString().split(" ")[0],
            date: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`,
            month: date.toLocaleString("default", { month: "long" }),
            year: date.getFullYear()
        });
    });

    return initialDates;
};
export const convertRangeDates = (initialD: DateInfo[]) => {
    return initialD[0].month +
        " " +
        getDate(initialD[0].date).date +
        (initialD[0].year === initialD[(initialD.length - 1)].year
            ? ""
            : ", " + initialD[0].year) +
        " - " +
        (initialD[0].month === initialD[(initialD.length - 1)].month
            ? ""
            : initialD[(initialD.length - 1)].month) +
        " " +
        getDate(initialD[(initialD.length - 1)].date).date +
        ", " +
        initialD[(initialD.length - 1)].year
}
export const displayRangeTime = (id: number) => {
    const findEvent = events.find((event) => event.id === id)
    if (findEvent) {
        const startDate = new Date(findEvent.start.date);
        const endDate = new Date(findEvent.end.date);

        return startDate.toLocaleString("default", { month: "long" }).substring(0, 3) + " " + `${startDate.getDate() < 10 ? 0 : ""}${startDate.getDate()}` + " " + allHours[findEvent.start.time] + " - " + endDate.toLocaleString("default", { month: "long" }).substring(0, 3) + " " + `${endDate.getDate() < 10 ? 0 : ""}${endDate.getDate()}` + " " + allHours[findEvent.end.time]
    }



    return ""
}
export const getWeekNumber = (date: string) => {
    const selectedDate = new Date(date) as any;
    const currentDate = new Date() as any;

    return Math.round(((selectedDate - currentDate) / 86400000 + 1) / 7);
};

export const getDate = (date: string) => {
    const dateObject = new Date(date);

    return {
        year: dateObject.getFullYear(),
        month: dateObject.getMonth() + 1,
        date: dateObject.getDate(),
    }
}
export const convertDate = (date: Date) => {

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    return dateString
}

export const eventsIntersect = (events: EventType[]) => {
    const overlappingEvents: EventType[][] = [];

    // Sort events by time 
    const sortedEvents = events.sort((a, b) => {
        if (a.start.date === b.start.date) {
            return a.start.time - b.start.time;
        }
        return a.start.date.localeCompare(b.start.date);
    });

    let currentGroup: EventType[] = [sortedEvents[0]];

    for (let i = 1; i < sortedEvents.length; i++) {
        const currentEvent = sortedEvents[i];
        const previousEvent = currentGroup[currentGroup.length - 1];

        if (
            currentEvent.start.date === previousEvent.start.date &&
            currentEvent.start.time < previousEvent.end.time
        ) {
            // If the current event intersects with the previous event, add it to the same group
            currentGroup.push(currentEvent);
        } else {
            // Ìf not create new group
            overlappingEvents.push(currentGroup);
            currentGroup = [currentEvent];
        }
    }

    // Add the last group to the intersection event list (if any)
    overlappingEvents.push(currentGroup);
    return overlappingEvents

}
export const groupOverlappingEvents = (events: EventType[]): EventType[][] => {
    const sortedEvent = [...events]
    sortedEvent.sort((a, b) => {
        const dateComparison = a.start.date.localeCompare(b.start.date);

        if (dateComparison !== 0) {
            return dateComparison;
        }

        // Sort by start time in ascending order
        const startTimeComparison = a.start.time - b.start.time;

        if (startTimeComparison !== 0) {
            return startTimeComparison;
        }

        // If start times are equal, prioritize longer ranges (end time - start time) in descending order
        const rangeA = a.end.time - a.start.time;
        const rangeB = b.end.time - b.start.time;

        return rangeB - rangeA;
    });
    const groupedEvents: EventType[][] = [];
    let currentGroup: EventType[] = [];

    for (let i = 0; i < sortedEvent.length; i++) {
        const event = sortedEvent[i];

        // Kiểm tra xem sự kiện hiện tại có giao nhau với các sự kiện trong nhóm không
        const intersects = currentGroup.some(existingEvent =>
            isEventsOverlap(event, existingEvent)
        );

        if (!intersects) {
            // Nếu sự kiện hiện tại không giao nhau với bất kỳ sự kiện nào trong nhóm hiện tại
            groupedEvents.push([...currentGroup]);
            currentGroup = [event];
        } else {
            // Nếu sự kiện hiện tại giao nhau với ít nhất một sự kiện trong nhóm hiện tại
            currentGroup.push(event);
        }
    }

    // Xử lý trường hợp cuối cùng
    if (currentGroup.length > 0) {
        groupedEvents.push([...currentGroup]);
    }

    return groupedEvents;
}

export const handleEvents = (events: EventType[]) => {
    const updatedEvents = [];

    for (const event of events) {
        if (event.start.date !== event.end.date) {
            // Create new object for start date
            const startEvent = {
                ...event,
                end: {
                    time: 24, //Time for end event for start date
                    date: event.start.date,
                },
            };
            updatedEvents.push(startEvent);

            //Create new event for end date
            const endEvent = {
                ...event,
                start: {
                    time: 0, // Time for start event of end date
                    date: event.end.date,
                },
            };
            updatedEvents.push(endEvent);

            // Create objects for the dates in between
            const currentDate = new Date(event.start.date);
            currentDate.setDate(currentDate.getDate() + 1);

            while (currentDate < new Date(event.end.date)) {
                const middleEvent = {
                    ...event,
                    start: {
                        time: 0,// Starts a beetwen day
                        date: currentDate.toISOString().split('T')[0],
                    },
                    end: {
                        time: 24, // End a beetwen day
                        date: currentDate.toISOString().split('T')[0],
                    },
                };
                updatedEvents.push(middleEvent);

                currentDate.setDate(currentDate.getDate() + 1);
            }
        } else {
            updatedEvents.push(event);
        }
    }
    return updatedEvents
}
function isEventsOverlap(event1: EventType, event2: EventType) {
    return (
        event1.start.time < event2.end.time &&
        event1.end.time > event2.start.time &&
        event1.start.date === event2.start.date
    );
}

// Hàm tính số cột

export const calculateColumns = (events: EventType[]) => {
    // Mảng lưu trữ các cột
    const columns: any = [];

    // Duyệt qua từng sự kiện
    events.forEach((event) => {
        // Tìm xem sự kiện có thể thêm vào cột nào không
        let addedToColumn = false;
        for (let i = 0; i < columns.length; i++) {
            const column = columns[i];
            // Kiểm tra xem có giao nhau không với sự kiện đã có trong cột
            const overlap = column.some((existingEvent: any) =>
                isEventsOverlap(existingEvent, event)
            );
            if (!overlap) {
                // Nếu không giao nhau, thêm vào cột
                column.push(event);
                addedToColumn = true;
                break;
            }
        }

        // Nếu không thể thêm vào bất kỳ cột nào, tạo một cột mới
        if (!addedToColumn) {
            columns.push([event]);
        }
    });

    // Sắp xếp lại mỗi cột theo thời gian start
    columns.forEach((column: any) =>
        column.sort((a: any, b: any) => a.start.time - b.start.time)
    );

    // Trả về mảng các cột
    return columns;
}
export function doesEventOverlapWithRightColumn(event: EventType, rightColumn: EventType[][]) {
    return rightColumn.some((otherEvents: EventType[]) => otherEvents.some((e: EventType) => {
        return isEventsOverlap(event, e)
    }
    ));

}


//------------Post---------------
export const formatTimePost = (date: Date): string => {

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month since it's 0-based
    const day = date.getDate().toString().padStart(2, '0');

    const datePart = `${month}/${day}/${year}`;

    const hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = (hour % 12) || 12;

    const timePart = `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;

    return `${datePart} ${timePart}`;
}
