require 'json'

puts "Enter frame size:"
frame_size = gets.chomp.to_i
puts "Enter number of columns:"
cols = gets.chomp.to_i
puts "Enter number of rows:"
rows = gets.chomp.to_i

json_hash = { frames: {}}
row_counter = 0
col_counter = 0
frame_counter = 0
y = 0

while row_counter < rows
  col_counter = 0
  x = 0
  while col_counter < cols
    json_hash[:frames].merge!({
    "anim-#{frame_counter}" => {
      frame: {
          x: x,
          y: y,
          w: frame_size,
          h: frame_size,
        }
      }
    })
    x += frame_size
    frame_counter += 1
    col_counter += 1
  end
  y += frame_size
  row_counter += 1
end

puts json_hash.to_json
