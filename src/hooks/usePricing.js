import { useEffect, useState } from "react";

const usePricing = () => {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rafi983/assignment_api/main/pricing.json"
    )
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);

  return [pricing];
};

export default usePricing;
