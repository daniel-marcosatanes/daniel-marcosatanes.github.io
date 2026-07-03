# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    # Digests file or directory contents to produce MD5 hash string for cache busting.
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :directory

      # Initializes a new CacheDigester instance.
      #
      # @param file_name [String] Name of the target file.
      # @param directory [String, nil] Optional directory path to read all files from.
      def initialize(file_name:, directory: nil)
        self.file_name = file_name
        self.directory = directory
      end

      # Generates a MD5-hashed query string appended to the file name.
      #
      # @return [String] The format "filename?md5hash"
      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      # Reads content from all files inside the specified directory.
      #
      # @return [String] Concatenated contents of all files.
      def directory_files_content
        target_path = File.join(directory, '**', '*')
        Dir[target_path].map{|f| File.read(f) unless File.directory?(f) }.join
      end

      # Reads content of the target file.
      #
      # @return [String] Content of the target file.
      def file_content
        local_file_name = file_name.slice((file_name.index('assets/')..-1))
        File.read(local_file_name)
      end

      # Retrieves file contents based on whether directory is nil.
      #
      # @return [String] Target contents.
      def file_contents
        is_directory? ? file_content : directory_files_content
      end

      # Checks if directory is nil.
      #
      # @return [Boolean] True if directory is nil, false otherwise.
      def is_directory?
        directory.nil?
      end
    end

    # Liquid filter to cache-bust a single file.
    #
    # @param file_name [String] Path of the file to bust.
    # @return [String] File path with MD5 query parameter.
    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: nil).digest!
    end

    # Liquid filter to cache-bust CSS files referencing a Sass directory.
    #
    # @param file_name [String] Path of the CSS file.
    # @return [String] CSS path with MD5 query parameter.
    def bust_css_cache(file_name)
      CacheDigester.new(file_name: file_name, directory: 'assets/_sass').digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)