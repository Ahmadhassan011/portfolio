"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 16);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xd94d26,
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0xd94d26,
      emissiveIntensity: 0.15,
      wireframe: false,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xd94d26,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMat);
    wireframe.scale.set(1.02, 1.02, 1.02);
    scene.add(wireframe);

    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xd94d26,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener("mousemove", onMouseMove);

    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      angle += 0.005;
      torusKnot.rotation.x = angle * 0.8;
      torusKnot.rotation.y = angle;
      wireframe.rotation.x = angle * 0.8;
      wireframe.rotation.y = angle;
      particles.rotation.y = angle * 0.3;
      torusKnot.rotation.x += (mouseY * 0.3 - torusKnot.rotation.x) * 0.02;
      torusKnot.rotation.y += (mouseX * 0.5 - torusKnot.rotation.y) * 0.02;
      wireframe.rotation.x = torusKnot.rotation.x;
      wireframe.rotation.y = torusKnot.rotation.y;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      const size = Math.min(container.clientWidth, 400);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    return () => {
      container.removeChild(renderer.domElement);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[400px] aspect-square mx-auto cursor-grab active:cursor-grabbing"
    />
  );
}
