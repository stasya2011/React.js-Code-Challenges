import { useState, useEffect } from "react";

export default function DogPics() {
  const [src, setSrc] = useState({ name: "DOG", src: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onFetch();
  }, []);

  const onFetch = () => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((r) => {
        setSrc((state) => ({ ...state, src: r.message }));
        setIsLoading(false);
      });
  };

  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src={src.src} alt={src.name} />
      <h3>{src.name}</h3>
      <button disabled={isLoading} onClick={onFetch}>
        🐶
      </button>
    </div>
  );
}
