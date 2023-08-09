import React, { useState } from "react";
import "./sideBar.scss";
import { Accordion, Icon, Checkbox, Input, Tab } from "semantic-ui-react";
import { Slider, DateRangePicker } from "rsuite";
// import ptBR from "date-fns/locale/pt-BR";

export const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <>
      <nav className="lateral">
        <ul>
          <li>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                Métodos
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Checkbox label="GET" />
                <Checkbox label="POST" />
                <Checkbox label="PUT" />
                <Checkbox label="DELETE" />
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                Status
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <Checkbox label="200" />
                <Checkbox label="400" />
                <Checkbox label="401" />
                <Checkbox label="403" />
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                URL
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <Input placeholder="Digite a URL" />
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={handleClick}
              >
                <Icon name="dropdown" />
                Switch Data
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <Slider
                  progress
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
              </Accordion.Content>
            </Accordion>
            <DateRangePicker
              placeholder="Selecione"
              format="dd-MM-yyyy"
              // locale={ptBR}
              ranges={[]}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
