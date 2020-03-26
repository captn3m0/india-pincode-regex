require 'pincode_validator'

describe PincodeValidator do
  it 'should validate pincodes' do
    ['244713', '560029', '560030', '110011'].each do |pin|
        expect(described_class::valid? pin).to eq(true)
    end
  end
end
