import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

interface ThreeSceneProps {
  width: number;
  height: number;
  className?: string;
}

const StyledContainer = styled.div<ThreeSceneProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThreeScene: React.FC<ThreeSceneProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scene] = useState(() => new THREE.Scene());

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    if (!renderer.getContext()) {
      console.error("Unable to initialize WebGL renderer");
      return;
    }
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    camera.position.set(0, 0, 500);

    const loader = new FontLoader();
    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load("/textures/matcaps/3.png"); // Path to your texture

    loader.load(
      "fonts/helvetiker_regular.typeface.json", // Ensure you have this font or change the path
      function (font) {
        const textGeometry = new TextGeometry("JAMIE HUGHES", {
          font: font,
          size: 80,
          height: 20,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 15,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 2,
        });

        textGeometry.computeBoundingBox();
        if (textGeometry.boundingBox) {
          const offset = textGeometry.boundingBox
            .getCenter(new THREE.Vector3())
            .negate();
          textGeometry.translate(offset.x, offset.y, offset.z);
        }

        const material = new THREE.MeshMatcapMaterial({
          matcap: matcapTexture,
        });
        const textMesh = new THREE.Mesh(textGeometry, material);
        textMesh.position.z = 50; // Ensure it's slightly in front
        scene.add(textMesh);

        camera.lookAt(textMesh.position);
      },
      undefined,
      function (error) {
        console.error("An error happened during font loading:", error);
      }
    );

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y += 0.005; // Rotate around the Y axis
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
    };
  }, [width, height]);

  return <StyledContainer ref={containerRef} width={width} height={height} />;
};

export default ThreeScene;
