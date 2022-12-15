import React, {Component} from "react";

export default class IngredientsSection extends Component{
    render() {
        return(
            <div className="flex flex-col items-start bg-gray-700 m-3 rounded-lg p-4">
                <h2 className="text-white text-3xl font-semibold mb-2">Bahan</h2>
                <div className="flex flex-col items-start border-2 border-gray-800 p-4 rounded-xl bg-gray-300 w-full">
                    <h3 className="font-semibold text-xl mt-1">Utama</h3>
                    <p><span className="font-semibold mr-1">500gr</span>daging sapi / beef slice</p>
                    <p><span className="font-semibold mr-1">Secukupnya</span>margarin</p>

                    <h3 className="font-semibold text-xl mt-3">Bumbu</h3>
                    <p><span className="font-semibold mr-1">2 sachet</span>saori saos teriyaki</p>
                    <p><span className="font-semibold mr-1">3 sdm</span>kecap manis</p>
                    <p><span className="font-semibold mr-1">1 sdm</span>kecap asin</p>
                    <p><span className="font-semibold mr-1">1 sdm</span>minyak wijen</p>
                    <p><span className="font-semibold mr-1">Sejumput</span>lada bubuk</p>
                    <p><span className="font-semibold mr-1">Secukupnya</span>garam dan penyedap</p>

                    <h3 className="font-semibold text-xl mt-3">Bumbu Lain</h3>
                    <p><span className="font-semibold mr-1">2 siung</span>bawang putih, cintang</p>
                    <p><span className="font-semibold mr-1">1 buah</span>bawang bombay</p>

                    <h3 className="font-semibold text-xl mt-3">Taburan</h3>
                    <p><span className="font-semibold mr-1">Secukupnya</span>wijen</p>
                </div>
            </div>
        )
    }
}