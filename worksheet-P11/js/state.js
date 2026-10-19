
import { render } from "./dom.js";

export const state = {
    daftarProyek: [],
    kategoriAktif: "semua",
    favorit: []
};

export function isiProyek(daftar) {
    state.daftarProyek = daftar;
    render(state);
}

export function aturProyek(daftar) {
    state.daftarProyek = daftar;
}

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori;
    render(state);
}

export function tambahFavorit(id) {
    if (state.favorit.includes(id)) {
        state.favorit = state.favorit.filter(
            (favoritId) => favoritId !== id
        );
    } else {
        state.favorit.push(id);
    }

    render(state);
}
