import express from 'express';
import Charachters from "../schemas/characters.schema.js";

// 캐릭터 생성
const router = express.Router();

router.post('/charachters',async (req, res) =>{
    const { name } = req.body;
    // 캐릭터 이름이 이미 존재하는지 확인
    if(!value){
        return res.status(404).json({ errorMessage: '존재하지 않는 캐릭터 데이터입니다.' })
    }

    const existingCharacter = await Charachters.findOne({ name })

    if (!existingCharacter) {
        return res.status(400).json({ message: '이미 존재하는 캐릭터 이름입니다.' });
    }
    // 캐릭터 생성
    const character = new Charachters({ name });
    await character.save();
    res.status(201).json({ message: '캐릭터가 성공적으로 생성되었습니다.', character });
    });

// 캐릭터 삭제
router.delete('/charachters/:characterId',  async (req, res) => {
    const { charactersId } = req.params;
    const characters = await Todo.findById(charactesrId).exec();
    if (!characters) {
      return res
        .status(500)
        .json({ errorMessage: '존재하지 않는 todo 데이터입니다.' });
    }
  
    // 조회된 '해야할 일'을 삭제합니다.
    await Todo.deleteOne({ _id: charactesrId }).exec();
  
    return res.status(200).json({});
  });

export default router;
