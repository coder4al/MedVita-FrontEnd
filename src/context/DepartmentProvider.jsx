import {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import { generateDeparts } from '../utils/departmentGenerator';

const DepartmentContext = createContext();

export const DepartmentProvider = ({children}) => {
    const department = generateDeparts();

    return (
        <DepartmentContext.Provider value={department}>
            {children}
        </DepartmentContext.Provider>
    );
};

DepartmentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useDeparts = () => {
    return useContext(DepartmentContext);
};