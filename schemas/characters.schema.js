import mongoose from 'mongoose';

const charactersSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true, // value 필드는 필수 요소입니다.
  },
  order: {
    type: Number,
    required: true, // order 필드 또한 필수 요소입니다.
  },
  doneAt: {
    type: Date, // doneAt 필드는 Date 타입을 가집니다.
    required: false, // doneAt 필드는 필수 요소가 아닙니다.
  },
});

// 프론트엔드 서빙을 위한 코드입니다. 모르셔도 괜찮아요!
charactersSchema.virtual('charactersId').get(function () {
  return this._id.toHexString();
});
charactersSchema.set('toJSON', {
  virtuals: true,
});

const Charachters = mongoose.model('characters', charactersSchema);
export default Charachters;