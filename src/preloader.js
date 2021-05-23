import React from "react";

const Preloader = (props) => {
  return (
    <div className="Preloader">
      <div className="prel2">
        <p>Минуточку...</p>{" "}
        <p>
          Загружаю пользователей...
          <section className="one-fourth" id="html"></section>
        </p>
      </div>
    </div>
  );
};

export default Preloader;
