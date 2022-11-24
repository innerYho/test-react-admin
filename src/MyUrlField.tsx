import { useRecordContext } from "react-admin";
import { Link } from "@mui/material"
import LaunchIcon from "@mui/icons-material/Launch"
const MyUrlField = ({ source }) => {
    const record = useRecordContext()
    // if (!record) return null;

    return record ? (
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
        // <a href={record[source]}>{record[source]}</a>
    ) : null;
}
export default MyUrlField;