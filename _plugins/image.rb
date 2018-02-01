require 'digest/sha1'
require 'cgi'
require 'mini_magick'
require 'jekyll-srcset-tag'

module Jekyll
  module SrcsetTag
    class Image
      include Resizer
      attr_reader :source_path, :output_path, :web_output_path, :image_path, :ppi, :sources, :html_attributes
      def resize_images!(instances)
        if instances.any? { |i| i.undersized }
          warn "Warning:".yellow + " #{image_path} is smaller than the requested output file. " +
               "It will be resized without upscaling."
        end
        instances.each do |instance|
          if not output_dir.match(/\/[a-z]{2}\/assets/i)
            Resizer::resize(instance.image, output_dir, instance.filename, instance.output_width, instance.output_height)
            puts "Generated #{File.join(output_dir, instance.filename)}"
          end
        end
      end

    end
  end
end

