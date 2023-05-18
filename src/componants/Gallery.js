import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./DataList";
import { useState } from "react";

function Gallery(props) {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category === "all") {
            setData(Data);
            return;
        }
        const filteredData = Data.filter((value) => {
            return value.category === category;
        })
        setData(filteredData);
    }
    return (

        <div className="container">
            <div className="row">  
                <div className="col-sm-12">
                    <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
                    <Items data={data}/>
                </div>  
            </div>

        </div>

    )
}

export default Gallery;