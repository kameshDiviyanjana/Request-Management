

import React, { useEffect, useState } from "react";
import { IRequset, alldatarective } from "../componet/api";

interface Props {}

const Serch: React.FC<Props> = (props: Props) => {
    const [tododat, settododata] = useState<IRequset[]>([]);

    const alldatatodo = async () => {
        const respons = await alldatarective();
        settododata(respons);
    };

    useEffect(() => {
        alldatatodo();
    }, []);

    return (
        <div>
            Search
            <div>
                {Array.isArray(tododat) && tododat.length > 0 ? (
                    tododat.map((todo) => (
                        <></>
                        // <div key={todo.title}>
                        //     <h3>{todo.title}</h3>
                        //     <p>{todo.description}</p>
                        //     <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                        // </div>
                    ))
                ) : (
                    <p>No todos found</p>
                )}
            </div>
        </div>
    );
};

export default Serch;