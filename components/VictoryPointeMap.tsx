"use client";
import { useEffect, useRef } from "react";

// South Lake Trail corridor — ~1 mile, Clermont FL
// Stations 1–10 evenly spaced (1/10 mile each) along the trail
// Station 11 = yellow intake building on-site at Victory Pointe
const TRAIL: [number, number][] = [
  [28.5598222450, -81.7618666029], // Station 1  — SE start
  [28.5596268316, -81.7629041644], // Station 2
  [28.5594314181, -81.7639417259], // Station 3
  [28.5592360046, -81.7649792874], // Station 4
  [28.5590405911, -81.7660168490], // Station 5
  [28.5588451777, -81.7670544105], // Station 6
  [28.5586497642, -81.7680919720], // Station 7
  [28.5584543507, -81.7691295336], // Station 8
  [28.5582589372, -81.7701670951], // Station 9
  [28.5580635238, -81.7712046566], // Station 10
  [28.5581758081, -81.7715010344], // Station 11 — Honor Plaza
];

const YELLOW_BUILDING: [number, number] = [28.5579482473, -81.7712962903]; // Yellow intake building

const STATIONS = [
  { pos: TRAIL[0],  num: "1",  label: "Army — Strength Zone" },
  { pos: TRAIL[1],  num: "2",  label: "Marine Corps — Combat Fitness" },
  { pos: TRAIL[2],  num: "3",  label: "Navy — Core & Stability" },
  { pos: TRAIL[3],  num: "4",  label: "Air Force — Agility Zone" },
  { pos: TRAIL[4],  num: "5",  label: "Coast Guard — Rescue Fitness" },
  { pos: TRAIL[5],  num: "6",  label: "Space Force — Future Readiness" },
  { pos: TRAIL[6],  num: "7",  label: "Special Operations — Tribute" },
  { pos: TRAIL[7],  num: "8",  label: "Veteran First Responders" },
  { pos: TRAIL[8],  num: "9",  label: "Skilled Trades — Builder Zone" },
  { pos: TRAIL[9],  num: "10", label: "Wellness & Recovery" },
  { pos: TRAIL[10], num: "11", label: "🏆 Honor Plaza — MWD Memorial" },
];

export default function VictoryPointeMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(ref.current!, { scrollWheelZoom: false }).setView(
        [28.5589, -81.7665], 15
      );
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Trail polyline — military green
      L.polyline(TRAIL, { color: "#4A5D3F", weight: 5, opacity: 0.85, dashArray: "8 4" }).addTo(map);

      // Station markers
      STATIONS.forEach(({ pos, num, label }) => {
        const isHonor = num === "11";
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            width:${isHonor ? 34 : 28}px;
            height:${isHonor ? 34 : 28}px;
            border-radius:50%;
            background:${isHonor ? "#d97706" : "#4A5D3F"};
            border:3px solid ${isHonor ? "#fbbf24" : "#fff"};
            display:flex;align-items:center;justify-content:center;
            color:#fff;font-weight:700;font-size:${isHonor ? 13 : 11}px;
            box-shadow:0 2px 6px rgba(0,0,0,0.4);
            font-family:system-ui,sans-serif;
          ">${num}</div>`,
          iconSize: [isHonor ? 34 : 28, isHonor ? 34 : 28],
          iconAnchor: [isHonor ? 17 : 14, isHonor ? 17 : 14],
        });
        L.marker(pos, { icon })
          .addTo(map)
          .bindPopup(`<strong>Station ${num}</strong><br/>${label}`);
      });

      // Yellow building marker
      const yellowIcon = L.divIcon({
        className: "",
        html: `<div style="
          background:#eab308;border:3px solid #fff;border-radius:6px;
          padding:4px 8px;color:#1a1a1a;font-weight:700;font-size:11px;
          box-shadow:0 2px 6px rgba(0,0,0,0.4);white-space:nowrap;
          font-family:system-ui,sans-serif;
        ">🏠 Intake Hub</div>`,
        iconAnchor: [50, 14],
      });
      L.marker(YELLOW_BUILDING, { icon: yellowIcon })
        .addTo(map)
        .bindPopup("<strong>Yellow Building — Veteran Intake Hub</strong><br/>Navigation office, case management, and veteran support services.");

      // Distance label
      L.polyline(TRAIL, { color: "transparent" }).addTo(map)
        .bindTooltip("~1 Mile Veteran Fitness Corridor", {
          permanent: true, direction: "center", className: "corridor-label",
        });
    });

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef.current as any).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <style>{`.corridor-label { background: rgba(74,93,63,0.85); color: #fff; border: none; font-weight: 600; font-size: 12px; padding: 3px 8px; border-radius: 4px; box-shadow: none; }`}</style>
      <div ref={ref} style={{ height: "480px", width: "100%", borderRadius: "12px", overflow: "hidden" }} />
    </>
  );
}
