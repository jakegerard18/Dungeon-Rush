require 'json'

puts "Enter sprite name:"
sprite = gets.chomp

json_hash = { frames: {}}
frame_size = 48
cols = 4
rows = 11
row_counter = 0
col_counter = 0
y = 0

actions = [
  'idle',
  'taunt',
  'walk-down',
  'walk-right',
  'walk-up',
  'attack-down',
  'attack-right',
  'attack-up',
  'damage-down',
  'damage-right',
  'damage-up',
]

while row_counter < rows
  col_counter = 0
  x = 0
  while col_counter < cols
    json_hash[:frames].merge!({
    "#{sprite}-#{actions[row_counter]}-#{col_counter}" => {
      frame: {
          x: x,
          y: y,
          w: frame_size,
          h: frame_size,
        }
      }
    })
    x += frame_size
    col_counter += 1
  end
  y += frame_size
  row_counter += 1
end

puts json_hash.to_json
