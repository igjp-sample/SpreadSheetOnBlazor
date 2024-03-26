/**
 * Blazor ������ Iginte UI for jQuery �� SpreadSheet �𑀍삷�邽�߂́A
 * ���p�p�̃��\�b�h�Q��񋟂��܂��B
 */

/**
 * �����Ɏw�肳�ꂽ DOM �v�f���ASpreadSheet �ɏ������E�C���X�^���X�����܂��B
 * @param {HTMLElement} element Spreadsheet ������Ώ� DOM �v�f
 * @param {any} options �������I�v�V���� (��: {width:"100%", height:"100%"})
 */
export const initialize = (element, options) => {
    $(element).igSpreadsheet(options);
}

/**
 * �����Ɏw�肳�ꂽ DOM �v�f�� SpreadSheet �́A�w�肳�ꂽ�I�v�V�����l��ݒ�ύX���܂��B
 * @param {HTMLElement} element Spreadsheet �����ꂽ�Ώ� DOM �v�f
 * @param {string} key �I�v�V������
 * @param {string} value �ݒ肷��l
 */
export const setOption = (element, key, value) => {
    $(element).igSpreadsheet("option", key, value);
}

/**
 * �����Ɏw�肳�ꂽ byte �z�� (Uint8Array) ���A.xlsx �`���̃��[�N�u�b�N�ł���Ƃ��āASpreadsheet �ɓǂݍ��݂܂��B
 * @param {HTMLElement} element Spreadsheet �����ꂽ�Ώ� DOM �v�f
 * @param {Uint8Array} buff .xlsx �`�����[�N�u�b�N�̓��e������ byte �z��
 */
export const load = async (element, buff) => {
    // �Q��: https://jp.igniteui.com/spreadsheet/loading-data
    const workbook = await new Promise((resolve, reject) => $.ig.excel.Workbook.load(buff, resolve, reject));
    $(element).igSpreadsheet("option", "workbook", workbook);
}

/**
 * Spreadsheet �̓��e���A.xlsx �`���̃��[�N�u�b�N�Ŏ擾���Abyte �z�� (UInt8Array) �ŕԂ��܂��B
 * @param {HTMLElement} element Spreadsheet �����ꂽ�Ώ� DOM �v�f
 * @returns {Uint8Array} .xlsx �`�����[�N�u�b�N�̓��e������ byte �z��
 */
export const save = async (element) => {
    // �Q��: https://jp.igniteui.com/spreadsheet/loading-data
    const workbook = $(element).igSpreadsheet("option", "workbook");
    const buff = await new Promise((resolve, reject) => workbook.save({ type: 'uint8array' }, resolve, reject));
    return buff;
}