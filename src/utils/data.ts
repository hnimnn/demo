//-----------Calendar----------

export enum allHours {
    "0 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
}

export type EventType = {
    id: number;
    type: "Course" | "Exam" | "Appointment";
    attendance?: "present" | "absent" | "late" | "leave";
    content: string;
    start: {
        time: number;
        date: string;
    };
    end: {
        time: number;
        date: string;
    };
};
export type DateInfo = { day: string, date: string, month: string, year: number }

export const events: EventType[] = [
    {
        id: 0,
        type: "Course",
        content: "HTML, CSS",
        attendance: "late",
        start: {
            time: 1,
            date: "2023-10-31",
        },
        end: { time: 4, date: "2023-10-31" },
    },
    {
        id: 18,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 2,
            date: "2023-11-01",
        },
        end: { time: 3, date: "2023-11-01", },
    },
    {
        id: 19,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 3,
            date: "2023-11-01",
        },
        end: { time: 4, date: "2023-11-01", },
    },
    // {
    //     id: 1,
    //     type: "Exam",
    //     content: "HTML, CSS",
    //     start: {
    //         time: 3,
    //         date: "2023-10-31",
    //     },
    //     end: { time: 5, date: "2023-10-31" },
    // },
    {
        id: 2,
        type: "Course",
        content: "Javascript",
        attendance: "absent",
        start: {
            time: 4,
            date: "2023-10-31",
        },
        end: { time: 6, date: "2023-10-31" },
    },
    {
        id: 3,
        type: "Course",
        content: "C#",
        attendance: "leave",
        start: {
            time: 11,
            date: "2023-11-03",
        },
        end: { time: 14, date: "2023-11-03" },
    },
    {
        id: 4,
        type: "Course",
        content: "Typescript",
        attendance: "present",
        start: {
            time: 1,
            date: "2023-11-01",
        },
        end: { time: 3, date: "2023-11-01" },
    },
    {
        id: 5,
        type: "Course",
        content: "React, Redux",
        attendance: "present",
        start: {
            time: 5,
            date: "2023-10-31",
        },
        end: { time: 13, date: "2023-10-31" },
    },
    {
        id: 6,
        type: "Course",
        content: "Java, SpringBoot",
        attendance: "absent",
        start: {
            time: 2,
            date: "2023-11-01",
        },
        end: { time: 4, date: "2023-11-01" },
    },
    {
        id: 7,
        type: "Appointment",
        content: "React, Redux",
        start: {
            time: 5,
            date: "2023-10-31",
        },
        end: { time: 11, date: "2023-10-31" },
    },
    {
        id: 15,
        type: "Appointment",
        content: "React, Redux",
        start: {
            time: 14,
            date: "2023-10-31",
        },
        end: { time: 17, date: "2023-10-31" },
    },
    {
        id: 16,
        type: "Course",
        content: "React, Redux",
        attendance: 'present',
        start: {
            time: 16,
            date: "2023-10-31",
        },
        end: { time: 18, date: "2023-10-31" },
    },
    {
        id: 30,
        type: "Course",
        content: "React, Redux",
        attendance: 'present',
        start: {
            time: 0,
            date: "2023-10-31",
        },
        end: { time: 1, date: "2023-10-31" },
    },
    {
        id: 8,
        type: "Course",
        content: "ASP .Net",
        attendance: "leave",
        start: {
            time: 5,
            date: "2023-12-10",
        },
        end: { time: 9, date: "2023-12-10" },
    },
    {
        id: 9,
        type: "Course",
        content: "SCSS, SASS",
        attendance: "leave",
        start: {
            time: 5,
            date: "2024-01-05",
        },
        end: { time: 6, date: "2024-01-05" },
    },
    {
        id: 10,
        type: "Course",
        content: "Hooks",
        attendance: "present",
        start: {
            time: 1,
            date: "2022-01-05",
        },
        end: { time: 6, date: "2022-01-05" },
    },
    {
        id: 11,
        type: "Course",
        content: "Component",
        attendance: "leave",
        start: {
            time: 23,
            date: "2023-11-02",
        },
        end: { time: 2, date: "2023-11-03" },
    },
    // {
    //   id: 12,
    //   type: "Course",
    //   content: "React, Redux",
    //   attendance: "leave",
    //   start: {
    //     time: 1,
    //     date: "2023-11-04",
    //   },
    //   end: { time: 24, date: "2023-11-04" },
    // },
    {
        id: 12,
        type: "Course",
        content: "Allure UI",
        attendance: "leave",
        start: {
            time: 0,
            date: "2023-11-04",
        },
        end: { time: 1, date: "2023-11-04" },
    },
    {
        id: 13,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 0,
            date: "2027-11-04",
        },
        end: { time: 1, date: "2027-11-04" },
    },
    {
        id: 14,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 1,
            date: "2023-10-31",
        },
        end: { time: 16, date: "2023-10-31" },
    },
    {
        id: 20,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 2,
            date: "2023-10-31",
        },
        end: { time: 5, date: "2023-10-31" },
    },
    {
        id: 21,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 6,
            date: "2023-10-31",
        },
        end: { time: 10, date: "2023-10-31" },
    },
    {
        id: 29,
        type: "Course",
        content: "React Router",
        attendance: "leave",
        start: {
            time: 12,
            date: "2023-10-31",
        },
        end: { time: 14, date: "2023-10-31" },
    },

];
//------------Post-----------

export type PostType = {
    id: string,
    user: UserType,
    time: string,
    postContent: string,
    type: 'idea' | 'notification',
    likeNumber: number,
    viewNumber: number,
    commentNumber: number,
    // comment: CommentType[],
}
export type UserType = {
    id: string,
    avatar: string,
    name: string,
    gender: 'male' | 'female' | 'other',
}
export type CommentType = {
    id: string,
    user: UserType,
    commentContent: '',
    likeNumber: 0,
}
export const postList: PostType[] = [
    {
        id: 'p1',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: ` <h2>Text Spacing</h2>
        <br/>
        <p>In this chapter you will learn about the following properties:</p>
        <ul>
            <li>
                text-indent 
            </li>
            <li>
                letter-space
               </li>
            <li>
                line-height 
            </li>
            <li>
                word-spacin     
            </li>
            <li>
                white-space 
            </li>
        </ul>`,
        type: 'idea',
        likeNumber: 124,
        viewNumber: 2030,
        commentNumber: 5,
        // comment: [
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        // ]
    },
    {
        id: 'p2',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Daido Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a> that has just
        been released! It contains information on requirements for
        recertification, various learning activities that can count towards
        fulfilling the required 90 CPD hours, how to update your profile in
        IHRP Connect, FAQs etc.
      </p>
      `,
        type: 'idea',
        likeNumber: 4,
        viewNumber: 135,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p3',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Tue Nov 07 2023 21:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>
      <p>
      Check out the Recertification Handbook that has just been released! It
      contains information on requirements for recertification, various
      learning activities that can count towards fulfilling the required 90
      CPD hours, how to update your profile in IHRP Connect, FAQs etc.
    </p>
    <br />
    <p>
      Other resources updated includes Guide to accessing IHRP Portal for
      the first time , Ways to earn points on IHRP Connect.
    </p>
    
      `,
        type: 'notification',
        likeNumber: 20,
        viewNumber: 405,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p4',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Samson Nguyen',
            gender: 'female',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for  <a href="">recertification</a> , various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
      Other resources updated includes  <a href=""> Guide to accessing IHRP Portal for the first time , Ways to earn points on IHRP Connect </a>. More resources will be updated in time.
      </p>`,
        type: 'notification',
        likeNumber: 15,
        viewNumber: 120,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p5',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 15:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 0,
        viewNumber: 0,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p6',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Dash Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 19:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the Recertification Handbook that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 34,
        viewNumber: 556,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // {
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // ]
    },
    {
        id: 'p7',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: ` <h2>Text Spacing</h2>
        <br/>
        <p>In this chapter you will learn about the following properties:</p>
        <ul>
            <li>
                text-indent 
            </li>
            <li>
                letter-space
               </li>
            <li>
                line-height 
            </li>
            <li>
                word-spacin     
            </li>
            <li>
                white-space 
            </li>
        </ul>`,
        type: 'idea',
        likeNumber: 124,
        viewNumber: 2030,
        commentNumber: 5,
        // comment: [
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        // ]
    },
    {
        id: 'p8',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Daido Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a> that has just
        been released! It contains information on requirements for
        recertification, various learning activities that can count towards
        fulfilling the required 90 CPD hours, how to update your profile in
        IHRP Connect, FAQs etc.
      </p>
      `,
        type: 'idea',
        likeNumber: 4,
        viewNumber: 135,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p9',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Tue Nov 07 2023 21:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>
      <p>
      Check out the Recertification Handbook that has just been released! It
      contains information on requirements for recertification, various
      learning activities that can count towards fulfilling the required 90
      CPD hours, how to update your profile in IHRP Connect, FAQs etc.
    </p>
    <br />
    <p>
      Other resources updated includes Guide to accessing IHRP Portal for
      the first time , Ways to earn points on IHRP Connect.
    </p>
    
      `,
        type: 'notification',
        likeNumber: 20,
        viewNumber: 405,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p10',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Samson Nguyen',
            gender: 'female',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for  <a href="">recertification</a> , various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'notification',
        likeNumber: 15,
        viewNumber: 120,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p11',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 15:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 0,
        viewNumber: 0,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p12',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Dash Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 19:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the Recertification Handbook that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 34,
        viewNumber: 556,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // {
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // ]
    },
    {
        id: 'p13',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: ` <h2>Text Spacing</h2>
        <br/>
        <p>In this chapter you will learn about the following properties:</p>
        <ul>
            <li>
                text-indent 
            </li>
            <li>
                letter-space
               </li>
            <li>
                line-height 
            </li>
            <li>
                word-spacin     
            </li>
            <li>
                white-space 
            </li>
        </ul>`,
        type: 'idea',
        likeNumber: 124,
        viewNumber: 2030,
        commentNumber: 5,
        // comment: [
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        //     {
        //         id: 'cm1',
        //         user: {
        //             id: 'u2',
        //             avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //             name: '',
        //             gender: 'male',
        //         },
        //         commentContent: '',
        //         likeNumber: 0,
        //     },
        // ]
    },
    {
        id: 'p14',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Daido Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a> that has just
        been released! It contains information on requirements for
        recertification, various learning activities that can count towards
        fulfilling the required 90 CPD hours, how to update your profile in
        IHRP Connect, FAQs etc.
      </p>
      `,
        type: 'idea',
        likeNumber: 4,
        viewNumber: 135,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p15',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Tue Nov 07 2023 21:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>
      <p>
      Check out the Recertification Handbook that has just been released! It
      contains information on requirements for recertification, various
      learning activities that can count towards fulfilling the required 90
      CPD hours, how to update your profile in IHRP Connect, FAQs etc.
    </p>
    <br />
    <p>
      Other resources updated includes Guide to accessing IHRP Portal for
      the first time , Ways to earn points on IHRP Connect.
    </p>
    
      `,
        type: 'notification',
        likeNumber: 20,
        viewNumber: 405,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p16',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Samson Nguyen',
            gender: 'female',
        },
        time: 'Wed Nov 08 2023 10:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for  <a href="">recertification</a> , various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'notification',
        likeNumber: 15,
        viewNumber: 120,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p17',
        user: {
            id: 'u1',
            avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
            name: 'Lewis Nguyen',
            gender: 'male',
        },
        time: 'Wed Nov 08 2023 15:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the  <a href="">Recertification Handbook</a>  that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 0,
        viewNumber: 0,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // }]
    },
    {
        id: 'p18',
        user: {
            id: 'u1',
            avatar: 'https://wallpapercave.com/wp/wp7132131.jpg',
            name: 'Dash Nguyen',
            gender: 'female',
        },
        time: 'Mon Nov 06 2023 19:10:50 GMT+0700 (Indochina Time)',
        postContent: `  <p>
        Check out the Recertification Handbook that has just been released! It
        contains information on requirements for recertification, various
        learning activities that can count towards fulfilling the required 90
        CPD hours, how to update your profile in IHRP Connect, FAQs etc.
      </p>
      <br />
      <p>
        Other resources updated includes Guide to accessing IHRP Portal for
        the first time , Ways to earn points on IHRP Connect.
      </p>`,
        type: 'idea',
        likeNumber: 34,
        viewNumber: 556,
        commentNumber: 5,
        // comment: [{
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // {
        //     id: 'cm1',
        //     user: {
        //         id: 'u2',
        //         avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.FuztgIpo-ulTrGNUgfg1uQAAAA?pid=ImgDet&rs=1',
        //         name: '',
        //         gender: 'male',
        //     },
        //     commentContent: '',
        //     likeNumber: 0,
        // },
        // ]
    },
]