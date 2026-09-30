import { STUDENT } from '../config/student';

// Expone la información del estudiante lista para mostrarse.
export default function useStudent() {
  return [
    { label: 'Nombre', value: STUDENT.name },
    { label: 'Carnet', value: STUDENT.carnet },
    { label: 'Sección y grupo', value: STUDENT.sectionGroup },
  ];
}
