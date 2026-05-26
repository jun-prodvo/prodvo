"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import type { TeamMember } from "@/lib/config";

const PER_PAGE = 3;

export function TeamSlider({ members }: { members: readonly TeamMember[] }) {
  const totalPages = Math.ceil(members.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: number) => {
    setPage((prev) => {
      const next = prev + dir;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  }, [totalPages]);

  useEffect(() => {
    autoRef.current = setInterval(() => go(1), 6000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [go]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(1), 6000);
  };

  const handlePrev = () => { go(-1); resetAuto(); };
  const handleNext = () => { go(1); resetAuto(); };
  const handleDot = (i: number) => { setPage(i); resetAuto(); };

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    startX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) handleNext();
      else handlePrev();
    }
  };

  const start = page * PER_PAGE;
  const visible = members.slice(start, start + PER_PAGE);

  return (
    <div
      className="about-team-grid"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => setDragging(false)}
    >
      {visible.map((member) => (
        <div key={member.name} className="about-team-card">
          <div className="about-team-card-photo">
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
              className="about-team-card-photo-image"
            />
          </div>
          <div className="about-team-card-info">
            <h3 className="about-team-card-name">{member.name}</h3>
            <span className="about-team-card-role">{member.role}</span>
            <p className="about-team-card-bio">{member.bio}</p>
          </div>
        </div>
      ))}

      <div className="about-slider-controls">
        <button className="about-slider-arrow" onClick={handlePrev} aria-label="Previous" type="button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="about-slider-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} className={`about-slider-dot${i === page ? " active" : ""}`} onClick={() => handleDot(i)} aria-label={`Page ${i + 1}`} type="button" />
          ))}
        </div>
        <button className="about-slider-arrow" onClick={handleNext} aria-label="Next" type="button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
