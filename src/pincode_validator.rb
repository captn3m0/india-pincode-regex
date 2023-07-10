module PincodeValidator
  VERSION = "2.0.0"
  FILENAME='regex.txt'

  class Error < StandardError; end

  def self.root
    File.dirname __dir__
  end

  @@regex ||=
    Regexp.new(File.read(File.join root, FILENAME).strip)

  @@exactRegex ||=
    Regexp.new("^#{File.read(File.join root, FILENAME).strip}$")

  def self.valid?(pincode)
    return true if @@exactRegex.match? pincode
    false
  end

  def self.search?(address)
    address.scan(@@regex).map(&:first).map(&:strip)
  end
end
