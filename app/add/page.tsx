"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";

const App: React.FC = () => {

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "#f5f5f5",
    borderRadius: "12px",
    width: "350px",
    margin: "20px auto",
  };

  const calendarStyle: React.CSSProperties = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "10px",
    background: "#fff",
  };

  return (
    <div style={containerStyle}>
      <Switch />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        style={calendarStyle}
      />

      <Button style={{ background: "#0e0b25", color: "#fff" }}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
