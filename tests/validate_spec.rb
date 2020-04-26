require 'pincode_validator'

describe PincodeValidator do
  it 'should validate pincodes' do
    ['244713', '560029', '560030', '110011'].each do |pin|
        expect(described_class::valid? pin).to eq(true)
    end
  end

  it 'should validate incorrect pincodes' do
    ['999999', '99999', '9999', '999', '99', '9', '111111', '2447131'].each do |pin|
        expect(described_class::valid? pin).to eq(false), "#{pin} should be invalid"
    end
  end
end
