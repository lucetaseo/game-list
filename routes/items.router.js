const Item = require('../schemas/items.schema');

// 아이템 생성
const createItem = async (req, res) => {
    try {
        const { itemCode, itemName, itemStat } = req.body;
        // 아이템 생성
        const item = new Item({ itemCode, itemName, itemStat });
        await item.save();
        res.status(201).json({ message: '아이템이 성공적으로 생성되었습니다.', item });
    } catch (error) {
        console.error('아이템 생성 중 오류:', error.message);
        res.status(500).json({ message: '서버 오류' });
    }
};

// 아이템 수정
const updateItem = async (req, res) => {
    try {
        const { itemCode } = req.params;
        const { itemName, itemStat } = req.body;
        // 아이템 수정
        await Item.findByIdAndUpdate(itemCode, { itemName, itemStat });
        res.json({ message: '아이템이 성공적으로 수정되었습니다.' });
    } catch (error) {
        console.error('아이템 수정 중 오류:', error.message);
        res.status(500).json({ message: '서버 오류' });
    }
};

// 아이템 삭제
const deleteItem = async (req, res) => {
    try {
        const { itemCode } = req.params;
        // 아이템 삭제
        await Item.findByIdAndDelete(itemCode);
        res.json({ message: '아이템이 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error('아이템 삭제 중 오류:', error.message);
        res.status(500).json({ message: '서버 오류' });
    }
};

export default router;