"use client";

import {
  useEffect,
  useRef,
  type ReactElement,
} from "react";
import { SITE } from "@/data/site";
import "./lux-map.css";

type LuxuryMapProps = {
  markerAria: string;
  mapAria: string;
};

export const LuxuryMap = ({
  markerAria,
  mapAria,
}: LuxuryMapProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    let cancelled = false;

    const mount = async (): Promise<void> => {
      if (!containerRef.current || mapRef.current) {
        return;
      }

      const L = await import("leaflet");
      if (cancelled || !containerRef.current) {
        return;
      }

      const map = L.map(containerRef.current, {
        center: [SITE.map.lat, SITE.map.lng],
        zoom: SITE.map.zoom,
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Free Esri dark canvas tiles — no API key
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 16,
          attribution:
            "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
        },
      ).addTo(map);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 16,
          opacity: 0.85,
        },
      ).addTo(map);

      const pinHtml = `
        <span class="lux-pin" aria-hidden="true">
          <span class="lux-pin-ring"></span>
          <span class="lux-pin-core"></span>
        </span>
      `;

      const icon = L.divIcon({
        className: "lux-marker",
        html: pinHtml,
        iconSize: [44, 44],
        iconAnchor: [22, 22],
      });

      L.marker([SITE.map.lat, SITE.map.lng], {
        icon,
        title: markerAria,
        keyboard: true,
        alt: markerAria,
      }).addTo(map);

      mapRef.current = map;

      const resize = (): void => {
        map.invalidateSize();
      };

      requestAnimationFrame(resize);
      window.setTimeout(resize, 200);
      window.setTimeout(resize, 600);
      window.addEventListener("resize", resize);

      (map as import("leaflet").Map & { __onResize?: () => void }).__onResize =
        resize;
    };

    void mount();

    return () => {
      cancelled = true;
      const map = mapRef.current as
        | (import("leaflet").Map & { __onResize?: () => void })
        | null;
      if (map?.__onResize) {
        window.removeEventListener("resize", map.__onResize);
      }
      map?.remove();
      mapRef.current = null;
    };
  }, [markerAria]);

  return (
    <div
      ref={containerRef}
      className="lux-map"
      role="img"
      aria-label={mapAria}
    />
  );
};
