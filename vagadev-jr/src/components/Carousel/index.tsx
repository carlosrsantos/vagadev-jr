

export function Carousel({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) {
  const slideRef = useRef();
useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt={...} key={i} />
        ))}
      </Slide>
      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}