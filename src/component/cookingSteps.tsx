import React, {Component} from "react";

export default class CookingSteps extends Component{
    render() {
        return(
            <div className="flex flex-col items-start bg-gray-700 m-3 rounded-lg p-4">
                <h2 className="text-white text-3xl font-semibold mb-2">Cara Memasak</h2>
                <div className="flex flex-col items-start border-2 border-gray-800 p-4 rounded-xl bg-gray-300 w-full">
                    <p className="text-left mb-2">
                        1. Cuci bersih beef slice. Tambahkan Saos teriyaki, kecap manis, kecap asin, minyak wijen, 
                        jahe, lada bubuk, garam dan penyedap. Aduk rata. Tutup wadah dengan plastik wrap, diamkan 
                        minimal 1 jam di dalam kulkas. (Saya wrap malam sebelum tidur, karena akan dimasak saat 
                        sarapan).
                    </p>
                    <p className="text-left mb-2">
                        2. Panaskan margarin, tumis bawang putih hingga harum. Masukkan beef slice yang sudah 
                        dimarinasi. Aduk hingga rata. Kecilkan api, tutup wajan. Masak hingga setengah matang. 
                        *Sesekali diaduk.
                    </p>
                    <p className="text-left mb-2">
                        3. Masukkan bawang bombay, aduk rata. Masak hingga matang. Cek rasa.
                    </p>
                    <p className="text-left mb-2">
                        4. Sajikan beef slice dengan taburan wijen.
                    </p>
                </div>
            </div>
        )
    }
}