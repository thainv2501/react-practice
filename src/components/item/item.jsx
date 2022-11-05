import React from 'react'
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Item = () => {
    const params = useParams();
    console.log(params)

    useEffect(() => {

        return () => {

        }
    }, [])

    return (
        <div>{params.id}
        </div>

    )
}

export default Item