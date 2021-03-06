import {
  AHA,
  BodyButter,
  InstanGlow,
  Sabun,
  Vitamin,
  PaketAll,
  PaketLengkap,
  SabunKategori,
  BodyCream,
  Serum,
  PerawatanWajah,
} from "../../assets";

export const DataProduk = [
  {
    id: 1,
    nama: "AHA Body Serum",
    gambar: AHA,
    kategori: {
      id: 2,
      nama: "Serum",
      gambar: Serum,
    },
    harga: 47000,
    berat: 0.1,
    stok: 100,
  },
  {
    id: 2,
    nama: "Body Butter",
    gambar: BodyButter,
    kategori: {
      id: 2,
      nama: "Body Cream",
      gambar: BodyCream,
    },
    harga: 60000,
    berat: 0.1,
    stok: 100,
  },
  {
    id: 3,
    nama: "Instan Glow",
    gambar: InstanGlow,
    kategori: {
      id: 2,
      nama: "Body Cream",
      gambar: BodyCream,
    },
    harga: 35000,
    berat: 0.1,
    stok: 100,
  },
  {
    id: 4,
    nama: "Sabun",
    gambar: Sabun,
    kategori: {
      id: 1,
      nama: "Sabun Whitehning",
      gambar: SabunKategori,
    },
    harga: 35000,
    berat: 0.1,
    stok: 1000,
  },
  {
    id: 5,
    nama: "Vitamin 15",
    gambar: Vitamin,
    kategori: {
      id: 4,
      nama: "Perawatan Wajah",
      gambar: PerawatanWajah,
    },
    harga: 100000,
    berat: 0.15,
    stok: 30,
  },
  {
    id: 6,
    nama: "Vitamin 30",
    gambar: Vitamin,
    kategori: {
      id: 4,
      nama: "Perawatan Wajah",
      gambar: PerawatanWajah,
    },
    harga: 180000,
    berat: 0.3,
    stok: 15,
  },
  {
    id: 7,
    nama: "Vitamin 60",
    gambar: Vitamin,
    kategori: {
      id: 4,
      nama: "Perawatan Wajah",
      gambar: PerawatanWajah,
    },
    harga: 300000,
    berat: 0.6,
    stok: 15,
  },
  {
    id: 8,
    nama: "Paket All In One",
    gambar: PaketAll,
    kategori: {
      id: 5,
      nama: "Paket",
    },
    harga: 380000,
    berat: 0.5,
    stok: 10,
  },
  {
    id: 9,
    nama: "Paket Lengkap",
    gambar: PaketLengkap,
    kategori: {
      id: 5,
      nama: "Paket",
    },
    harga: 400000,
    berat: 0.1,
    stok: 8,
  },
];
