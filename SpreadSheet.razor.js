/**
 * Blazor 側から Iginte UI for jQuery の SpreadSheet を操作するための、
 * 中継用のメソッド群を提供します。
 */

/**
 * 引数に指定された DOM 要素を、SpreadSheet に初期化・インスタンス化します。
 * @param {HTMLElement} element Spreadsheet 化する対象 DOM 要素
 * @param {any} options 初期化オプション (例: {width:"100%", height:"100%"})
 */
export const initialize = (element, options) => {
    $(element).igSpreadsheet(options);
}

/**
 * 引数に指定された DOM 要素の SpreadSheet の、指定されたオプション値を設定変更します。
 * @param {HTMLElement} element Spreadsheet 化された対象 DOM 要素
 * @param {string} key オプション名
 * @param {string} value 設定する値
 */
export const setOption = (element, key, value) => {
    $(element).igSpreadsheet("option", key, value);
}

/**
 * 引数に指定された byte 配列 (Uint8Array) を、.xlsx 形式のワークブックであるとして、Spreadsheet に読み込みます。
 * @param {HTMLElement} element Spreadsheet 化された対象 DOM 要素
 * @param {Uint8Array} buff .xlsx 形式ワークブックの内容を示す byte 配列
 */
export const load = async (element, buff) => {
    // 参照: https://jp.igniteui.com/spreadsheet/loading-data
    const workbook = await new Promise((resolve, reject) => $.ig.excel.Workbook.load(buff, resolve, reject));
    $(element).igSpreadsheet("option", "workbook", workbook);
}

/**
 * Spreadsheet の内容を、.xlsx 形式のワークブックで取得し、byte 配列 (UInt8Array) で返します。
 * @param {HTMLElement} element Spreadsheet 化された対象 DOM 要素
 * @returns {Uint8Array} .xlsx 形式ワークブックの内容を示す byte 配列
 */
export const save = async (element) => {
    // 参照: https://jp.igniteui.com/spreadsheet/loading-data
    const workbook = $(element).igSpreadsheet("option", "workbook");
    const buff = await new Promise((resolve, reject) => workbook.save({ type: 'uint8array' }, resolve, reject));
    return buff;
}