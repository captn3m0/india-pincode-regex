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

  it 'should search pincodes' do
    expect(described_class::search? '560029').to eq(['560029'])
    expect(described_class::search? '560029, 560030').to eq(['560029', '560030'])
    expect(described_class::search? '560029, 560030, 110011').to eq(['560029', '560030', '110011'])
    expect(described_class::search? 'bangalore 560029').to eq(['560029'])
    expect(described_class::search? 'bangalore 1').to eq([])
  end
end
