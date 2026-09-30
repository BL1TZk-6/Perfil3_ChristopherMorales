import { useMemo } from 'react';
import useFetchData from './useFetchData';
import { API_URL } from '../config/api';

// Lógica de negocio de los planetas: obtiene los datos y los adapta al formato que usa la UI.
export default function usePlanets() {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  const planets = useMemo(
    () =>
      (data?.items ?? []).map((planet) => ({
        id: String(planet.id),
        title: planet.name.trim(),
        image: encodeURI(planet.image),
        description: planet.description,
        badge: planet.isDestroyed ? 'Destruido' : 'Existente',
        badgeType: planet.isDestroyed ? 'danger' : 'success',
      })),
    [data]
  );

  return { planets, loading, error, refetch };
}
