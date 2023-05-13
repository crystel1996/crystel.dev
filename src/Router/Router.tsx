import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MODULES } from '../Modules';

export const Router: FC<{}> = () => {
    return <Routes>
        {(MODULES || []).map((module, index) => {
                return <Route key={index} path={module.path} element={module.component}></Route>
        })}
    </Routes>
}