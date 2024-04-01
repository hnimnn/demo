import * as THREE from "three";

import React, { useEffect, useRef } from "react";

export default function Three() {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    if (refContainer.current) {
      // use ref as a mount point of the Three.js scene instead of the document.body
      refContainer.current.appendChild(renderer.domElement);
    }
    const geometry = new THREE.BoxGeometry(2, 2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.x = 3;
    directionalLight.position.y = 4;
    directionalLight.position.z = 4;
    scene.add(directionalLight);

    scene.fog = new THREE.Fog(0xffffff, 0, 20000);
    renderer.setClearColor(scene.fog.color, 1);
    cube.position.z = -7;
    cube.rotation.x = 10;
    cube.rotation.y = 5;

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer}></div>;
}
