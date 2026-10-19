import { ambilProyek } from "./api.js";
import { isiProyek } from "./state.js";
import {
    tampilkanGalat,
    aturMemuat
} from "./dom.js";
import { pasangPendengar } from "./events.js";


async function mulai() {

    pasangPendengar();
    aturMemuat(true);

    try {
        const data = await ambilProyek();
        isiProyek(data);
    } catch (galat) {
        tampilkanGalat(
            "Data gagal dimuat. Periksa koneksi, lalu muat ulang."
        );
        console.error("Gagal memuat proyek:", galat.message);
    } finally {
        aturMemuat(false);
    }
}

mulai();
