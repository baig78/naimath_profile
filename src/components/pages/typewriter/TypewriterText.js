import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Web Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("UI/UX Designer")
          .start();
      }}
    />
  );
};

export default TypewriterText;
