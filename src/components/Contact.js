import { useState, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          'service_00lfx4n',
          'template_kgj1ok6',
          {
            from_name: form.name,
            to_name: "Jancris Paul Oporto",
            from_email: form.email,
            to_email: "oportojancrispaulavila25@gmail.com",
            message: form.message,
          },
          'LD0eD8p-O3F5hsn1H'
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };
  

    return (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                  }
                </TrackVisibility>
              </Col>
              <Col size={12} md={6}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" name='name'
                          value={form.name}
                          onChange={handleChange}
                          placeholder="What is your name?"/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" name='email'
                          value={form.email}
                          onChange={handleChange}
                          placeholder="What's your email?" />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" name='message'
                          value={form.message}
                          onChange={handleChange}
                          placeholder='What you want to say?'></textarea>
                          <button type='submit'>
                            {loading ? "Sending..." : "Send"} </button>
                        </Col>
                      </Row>
                    </form>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }

export default Contact