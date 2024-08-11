import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = (
  contentRef: React.RefObject<HTMLDivElement>,
  topBarRef: React.RefObject<HTMLDivElement>,
  bottomBarRef: React.RefObject<HTMLDivElement>,
  columnsContainerRef: React.RefObject<HTMLDivElement>,
  slideInDivRef1: React.RefObject<HTMLDivElement>,
  slideInDivRef2: React.RefObject<HTMLDivElement>,
  slideInDivRef3: React.RefObject<HTMLDivElement>,
  slideInDivRef4: React.RefObject<HTMLDivElement>,
  imagePlaceholder1Ref: React.RefObject<HTMLDivElement>,
  imagePlaceholder2Ref: React.RefObject<HTMLDivElement>,
  imagePlaceholder3Ref: React.RefObject<HTMLDivElement>,
  setDividerOpacity: (opacity: number) => void
) => {
  const tl = gsap.timeline();

  // Hide all content initially
  gsap.set(
    [
      contentRef.current,
      topBarRef.current,
      bottomBarRef.current,
      columnsContainerRef.current,
    ],
    { autoAlpha: 0 }
  );

  tl.to(
    [
      contentRef.current,
      topBarRef.current,
      bottomBarRef.current,
      columnsContainerRef.current,
    ],
    { autoAlpha: 1, duration: 0.1 }
  )
    .fromTo(
      contentRef.current,
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0%", duration: 1, ease: "power2.out" }
    )
    .fromTo(
      topBarRef.current,
      { x: "-100%" },
      { x: "0%", duration: 1.5, ease: "power3.out" },
      ">0.2"
    )
    .fromTo(
      bottomBarRef.current,
      { x: "100%" },
      { x: "0%", duration: 1.5, ease: "power3.out" },
      ">0.2"
    );

  if (columnsContainerRef.current) {
    const columns = columnsContainerRef.current.querySelectorAll(".col");

    gsap.to(columns[0], {
      clipPath: "inset(0 0 0 100%)",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: columnsContainerRef.current,
        start: "top 5%",
        end: "bottom 5%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.to(columns[1], {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: columnsContainerRef.current,
        start: "top 5%",
        end: "bottom 5%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.to(columns[2], {
      clipPath: "inset(0 0 100% 0)",
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: columnsContainerRef.current,
        start: "top 5%",
        end: "bottom 5%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    const col4 = columnsContainerRef.current.querySelector(".col-4");
    if (col4 instanceof HTMLElement) {
      const targetX =
        (window.innerWidth - col4.offsetWidth) / 2 -
        col4.getBoundingClientRect().left;

      const scaleX = window.innerWidth / col4.offsetWidth;
      const scaleY = window.innerHeight / col4.offsetHeight;
      const maxScale = Math.max(scaleX, scaleY);

      gsap.fromTo(
        col4,
        {
          rotation: 0,
          width: "100%",
          height: "30vh",
          x: 0,
          y: 0,
          scale: 1,
          zIndex: 1,
          position: "relative",
        },
        {
          rotation: 90,
          width: "140vw",
          height: "130vh",
          x: targetX,
          y: "-15vh",
          scaleX: 1,
          scaleY: 3,
          duration: 1,
          ease: "power3.inOut",
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: columnsContainerRef.current,
            start: "top top",
            end: "center top",
            scrub: true,
            onLeave: () => setDividerOpacity(1),
            onEnterBack: () => setDividerOpacity(0),
          },
          onComplete: () => setDividerOpacity(1),
        }
      );

      // Slide in and out the first centered div
      const slideInTimeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: columnsContainerRef.current,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      });

      slideInTimeline1
        .fromTo(
          slideInDivRef1.current,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            delay: 4,
            ease: "power3.out",
          }
        )
        .to(slideInDivRef1.current, {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power3.in",
        });

      // Slide in and out the second centered div
      const slideInTimeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: columnsContainerRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });

      slideInTimeline2
        .fromTo(
          slideInDivRef2.current,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: "power3.out",
            onComplete: () => {
              document.body.style.backgroundColor = "#dceaf7";
            },
          }
        )
        .to(slideInDivRef2.current, {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power3.in",
        });

      // Slide in and out the third centered div
      const slideInTimeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: columnsContainerRef.current,
          start: "bottom top",
          end: "bottom -50%",
          scrub: true,
        },
      });

      slideInTimeline3
        .fromTo(
          slideInDivRef3.current,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            delay: 1,
            ease: "power3.out",
          }
        )
        .to(slideInDivRef3.current, {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
          ease: "power3.in",
        });

      // Updated animation for the fourth slide-in div and image placeholders
      const slideInTimeline4 = gsap.timeline({
        scrollTrigger: {
          trigger: columnsContainerRef.current,
          start: "bottom -50%",
          end: "bottom -250%",
          scrub: true,
        },
      });

      slideInTimeline4
        .fromTo(
          slideInDivRef4.current,
          { y: "100%" },
          {
            y: "0%",
            duration: 1.5,
            ease: "power3.out",
          }
        )
        .fromTo(
          imagePlaceholder1Ref.current,
          { y: "100%" },
          { y: "0%", duration: 1.5, ease: "power3.out" },
          "-=1.5"
        )
        .to(
          imagePlaceholder1Ref.current,
          { y: "-100%", duration: 1.5, ease: "power3.in" },
          "+=1"
        )
        .fromTo(
          imagePlaceholder2Ref.current,
          { y: "100%" },
          { y: "0%", duration: 1.5, ease: "power3.out" },
          "-=1.5"
        )
        .to(
          imagePlaceholder2Ref.current,
          { y: "-100%", duration: 1.5, ease: "power3.in" },
          "+=1"
        )
        .fromTo(
          imagePlaceholder3Ref.current,
          { y: "100%" },
          { y: "0%", duration: 1.5, ease: "power3.out" },
          "-=1.5"
        );

      // Restore background color when scrolling back up past the second centered div animation
      ScrollTrigger.create({
        trigger: columnsContainerRef.current,
        start: "center top",
        end: "bottom top",
        scrub: true,
        onLeaveBack: () => {
          document.body.style.backgroundColor = "";
        },
      });
    }
  }
};
