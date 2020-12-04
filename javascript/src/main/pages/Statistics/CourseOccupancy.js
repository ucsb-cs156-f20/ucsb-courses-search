import React from "react";
import { useState } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { fetchCourseOccupancy } from "main/services/statisticsService";
import CourseOccupancyForm from "main/components/Statistics/CourseOccupancyForm";
import CourseOccupancyTable from "main/components/Statistics/CourseOccupancyTable";
import { fromFormat } from "main/components/Statistics/QuarterFormSelect";

const CourseOccupancy = () => {
    const [tableVisibility, setTableVisibility] = useState(false);
    const [tableData, setTableData] = useState([]);

    const setJsonTableData = (json) => {
        json.forEach((item) => {
            item["quarter"] = fromFormat(item["quarter"]);
        });
        setTableData(json);
        setTableVisibility(true);
    }

    return (
        <Jumbotron>
            <Container className="text-left">
                <h1>Course Occupancy by Department</h1>
                <CourseOccupancyForm setOccupancyJson={setJsonTableData} fetchJSON={fetchCourseOccupancy} />
            </Container>
            <Container>
                {tableVisibility && (<CourseOccupancyTable data={tableData} />)}
            </Container>
        </Jumbotron>
    );
};

export default CourseOccupancy;
