import { useEffect, useState } from "react";

const useEquips = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("./equipments.json")
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);

  return [equipments];
};

export default useEquips;
