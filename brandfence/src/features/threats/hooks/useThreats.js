import { useEffect, useState } from "react";
import { fetchThreats } from "../mock/threatsMock";

export default function useThreats(mode) {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        setStatus("loading");

        fetchThreats(mode).then((result) => {
            setData(result);
            setStatus("success");
        }).catch(() => {
            setStatus("error");
        });
    }, [mode]);

    return { data, status };
}
