import { useParams } from "react-router-dom";
import ThreatsLayout from "./ThreatsLayout";

export default function ThreatsPage() {
  const { mode = "all" } = useParams();
  return <ThreatsLayout mode={mode} />;
}
