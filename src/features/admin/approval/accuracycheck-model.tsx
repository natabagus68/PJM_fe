import { useState, useEffect } from "react";
import paralel1 from "../../../assets/paralel-1.png";
import paralel2 from "../../../assets/paralel-2.png";
import gib1 from "../../../assets/gib-1.png";
import gib2 from "../../../assets/gib-2.png";
import prepen1 from "../../../assets/prepen-1.png";
import prepen2 from "../../../assets/prepen-2.png";
import rumus from "../../../assets/calculate.png";

interface Item {
  parallel: {
    unit: number;
    balancer: number;
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
    }>;
    actual: number;
    allowance: number;
    judgement: string;
  };
  gib: {
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
    }>;
    actual: number;
    allowance: number;
    judgement: string;
  };
  prependicularity: {
    slideStroke: number;
    diagram: Array<{
      img_url: string;
      a: number;
      b: number;
      c: number;
      d: number;
      calculate: boolean;
      actual: number;
      allowance: number;
      judgement: string;
    }>;
  };
  total: {
    actualL: number;
    actual: number;
    allowance: number;
    judgement: string;
    calculate: boolean;
  };
}

export default function useAccuracy() {
  const [data, setData] = useState<Item>({});

  useEffect(() => {
    setData({
      parallel: {
        unit: 1500,
        balancer: 1000,
        diagram: [
          {
            img_url: paralel1,
            a: -0.15,
            b: -0.3,
            c: 0,
            d: 0,
            calculate: false,
          },
          {
            img_url: paralel2,
            a: -0.22,
            b: -0.15,
            c: 0,
            d: 0,
            calculate: true,
          },
        ],
        actual: 0.3,
        allowance: 0,
        judgement: "OK",
      },
      gib: {
        diagram: [
          {
            img_url: gib1,
            a: -0.15,
            b: -0.3,
            c: 0,
            d: 0,
            calculate: false,
          },
          {
            img_url: gib2,
            a: -0.22,
            b: -0.15,
            c: 0,
            d: 0,
            calculate: true,
          },
        ],
        actual: 0.3,
        allowance: 0,
        judgement: "OK",
      },
      prependicularity: {
        slideStroke: 1500,
        diagram: [
          {
            img_url: prepen1,
            a: -0.15,
            b: -0.3,
            c: 0,
            d: 0,
            calculate: false,
            actual: 0.3,
            allowance: 0,
            judgement: "OK",
          },
          {
            img_url: prepen2,
            a: -0.22,
            b: -0.15,
            c: 0,
            d: 0,
            calculate: true,
            actual: 0.3,
            allowance: 0,
            judgement: "NG",
          },
        ],
      },
      total: {
        actualL: -0.1,
        actual: 0,
        allowance: 0,
        judgement: "OK",
        calculate: true,
      },
    });
  }, []);

  return {
    data,
    rumus,
  };
}
