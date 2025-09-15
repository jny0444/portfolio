"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const initialImages = [
    { key: "dog", src: "/image/dog.png", alt: "dog image" },
    { key: "font", src: "/image/font.png", alt: "font image" },
    { key: "vim", src: "/image/vim.png", alt: "vim image" },
  ];
  const [images, setImages] = useState(initialImages);

  const defaultPositions = {
    dog: { x: 50, y: 50 },
    font: { x: 200, y: 50 },
    vim: { x: 350, y: 50 },
  };
  const [positions, setPositions] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("img-positions");
      if (saved) return JSON.parse(saved);
    }
    return defaultPositions;
  });
  const [dragging, setDragging] = useState<{
    key: string | null;
    offset: { x: number; y: number };
  }>({ key: null, offset: { x: 0, y: 0 } });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("img-positions", JSON.stringify(positions));
    }
  }, [positions]);

  const handleMouseDown = (key: string) => (e: React.MouseEvent) => {
    // Move the dragged image to the end of the array so it stays on top
    setImages((prev) => {
      const draggingImg = prev.find((img) => img.key === key);
      const others = prev.filter((img) => img.key !== key);
      return draggingImg ? [...others, draggingImg] : prev;
    });
    setDragging({
      key,
      offset: {
        x: e.clientX - positions[key].x,
        y: e.clientY - positions[key].y,
      },
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.key) return;
      setPositions((prev: typeof positions) => ({
        ...prev,
        [dragging.key!]: {
          x: e.clientX - dragging.offset.x,
          y: e.clientY - dragging.offset.y,
        },
      }));
    };
    const handleMouseUp = () => {
      setDragging({ key: null, offset: { x: 0, y: 0 } });
    };
    if (dragging.key) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      <div className="flex items-center justify-center py-10 md:h-auto h-auto">
        {images.map((img, idx) => (
          <div
            key={img.key}
            style={{
              position: "absolute",
              left: positions[img.key]?.x ?? 0,
              top: positions[img.key]?.y ?? 0,
              cursor: dragging.key === img.key ? "grabbing" : "grab",
              zIndex: idx + 50,
              touchAction: "none",
            }}
            onMouseDown={handleMouseDown(img.key)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={100}
              className="justify-center items-center select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}
