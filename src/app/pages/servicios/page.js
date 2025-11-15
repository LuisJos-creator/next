import Card from "../../components/card";

export default function Servicios() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-2"><Card /></div>
        <div className="row-span-2 col-start-2 row-start-2"><Card /></div>
        <div className="row-span-2 col-start-1 row-start-3"><Card /></div>
        <div className="row-span-2 col-start-1 row-start-5"><Card /></div>
        <div className="row-span-2 col-start-2 row-start-4"><Card /></div>
        <div className="row-span-2 col-start-3 row-start-1"><Card /></div>
        <div className="row-span-2 col-start-3 row-start-3"><Card /></div>
        <div className="row-span-2 col-start-3 row-start-5"><Card /></div>
        <div className="row-span-2 col-start-4 row-start-2"><Card /></div>
        <div className="row-span-2 col-start-4 row-start-4"><Card /></div>
        <div className="row-span-2 col-start-5 row-start-1"><Card /></div>
        <div className="row-span-2 col-start-5 row-start-3"><Card /></div>
        <div className="row-span-2 col-start-5 row-start-5"><Card /></div>
      </div>
    </>
  );
}
