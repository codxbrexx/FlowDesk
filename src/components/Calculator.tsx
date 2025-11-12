import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator as CalcIcon } from "lucide-react";

export const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (num: string) => {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation("");
    } catch {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
  };

  const buttonClass = "h-14 text-lg font-semibold rounded-xl transition-all hover:scale-105";

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="flex items-center gap-2 mb-4">
        <CalcIcon className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold neon-text">Calculator</h2>
      </div>

      <div className="bg-input/50 border border-border rounded-xl p-4 mb-4 text-right">
        <div className="text-3xl font-mono text-success font-bold tracking-wide">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button onClick={handleClear} className={`${buttonClass} bg-warning/80 hover:bg-warning text-white`}>
          C
        </Button>
        <Button onClick={() => handleOperator("/")} className={`${buttonClass} bg-card hover:bg-muted`}>
          ÷
        </Button>
        <Button onClick={() => handleOperator("%")} className={`${buttonClass} bg-primary hover:bg-primary/90`}>
          %
        </Button>
        <Button onClick={() => handleOperator("+")} className={`${buttonClass} bg-primary hover:bg-primary/90`}>
          ÷
        </Button>

        {[7, 8, 9].map((num) => (
          <Button key={num} onClick={() => handleNumber(String(num))} className={`${buttonClass} bg-card hover:bg-muted`}>
            {num}
          </Button>
        ))}
        <Button onClick={() => handleOperator("*")} className={`${buttonClass} bg-primary hover:bg-primary/90`}>
          ×
        </Button>

        {[4, 5, 6].map((num) => (
          <Button key={num} onClick={() => handleNumber(String(num))} className={`${buttonClass} bg-card hover:bg-muted`}>
            {num}
          </Button>
        ))}
        <Button onClick={() => handleOperator("-")} className={`${buttonClass} bg-primary hover:bg-primary/90`}>
          -
        </Button>

        {[1, 2, 3].map((num) => (
          <Button key={num} onClick={() => handleNumber(String(num))} className={`${buttonClass} bg-card hover:bg-muted`}>
            {num}
          </Button>
        ))}
        <Button onClick={() => handleOperator("+")} className={`${buttonClass} bg-primary hover:bg-primary/90`}>
          +
        </Button>

        <Button onClick={() => handleNumber("0")} className={`${buttonClass} col-span-2 bg-card hover:bg-muted`}>
          0
        </Button>
        <Button onClick={() => handleNumber(".")} className={`${buttonClass} bg-card hover:bg-muted`}>
          .
        </Button>
        <Button onClick={handleEqual} className={`${buttonClass} bg-success hover:bg-success/90 text-white`}>
          =
        </Button>
      </div>
    </div>
  );
};
