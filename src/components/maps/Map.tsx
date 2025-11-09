
'use client';

import React, { Children, isValidElement, useEffect, useRef, useState } from 'react';

interface MapComponentProps extends google.maps.MapOptions {
  children?: React.ReactNode;
  style?: { [key: string]: string };
  className?: string;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  children,
  style,
  className,
  ...options
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        mapId: 'PROPABRIDGE_MAP_ID',
        ...options,
      }));
    }
  }, [ref, map, options]);

  return (
    <>
      <div ref={ref} style={style} className={className} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map } as any);
        }
      })}
    </>
  );
};

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};
