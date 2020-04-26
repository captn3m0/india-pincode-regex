module PincodeValidator
  VERSION = "1.0.3"
  FILENAME='regex.txt'

  class Error < StandardError; end

  def self.root
    File.dirname __dir__
  end

  @@regexes ||= IO.readlines(File.join root, FILENAME).map do |line|
    Regexp.new("^#{line.strip[1...-1]}$")
  end

  def self.valid?(pincode)
    @@regexes.each do |r|
      return true if r.match? pincode
    end
    false
  end
end
