import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Button from "../components/Button";
import Title from "../components/Title";

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    console.log("items", items);
  }, [testimonials]);

  return (
    <div className="container text-center">
      <Title title={"Testimonials App"} />
      <Button
        text={"posts"}
        btnClass={"btn-info"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("posts")}
      />
      <Button
        text={"users"}
        btnClass={"btn-info"}
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("users")}
      />
      <Button
        text={"comments"}
        btnClass={"btn-info"}
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        title={testimonials ? testimonials : "select from above"}
      />
      <div>
        {!items
          ? null
          : items.map((item) => {
              return (
                <div className="card card-primary" key={item.id}>
                  {item.name && 
                    <h1 className="card card-header">{item.name}</h1>
                  }
                  <div className="card-body">
                    <h1>{item.title}</h1>
                    <p>{item.email}</p>
                  </div>
                  {item.email && (
                    <small className="card card-header">{item.email}</small>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TestimonialsApp;
